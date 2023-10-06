import React from "react";
import { Country, State, City }  from 'country-state-city';
import _exe from "../inc/exe";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase from "../firebase";

//const exe = new _exe();

class EditProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            country: null,
            states: [],
            items: [],
            data: {},
            index: 0,
            changed: false
        };
        this.db = getFirestore(firebase);
        this.data = {}
        this.countries = Country.getAllCountries();
        this.skills = [
            {title:"Web / App designing & development", option:[
                {text: "CSS/HTML"},
                {text: "jQuery/Ajax"},
                {text: "Javascript"},
                {text: "Bootstrap"},
                {text: "ReactJS"},
                {text: "Angular"},
                {text: "React Native"},
                {text: "PHP"},
                {text: "WordPress"},
                {text: "API Development"},
                {text: "Ionic"},
                {text: "Python"},
                {text: "Android - Kotlin"},
                {text: "iOS - Swift"},
            ]},
            {"title": "DevOps", option:[
                {text: "Docker"},
                {text: "Linux Fundamentals"},
                {text: "Github"},
                {text: "Kubernetes"},
                {text: "Firebase"},
                {text: "Cloud Computing"},
                {text: "MongoDB"},
                {text: "NodeJS/ExpressJS"},
                {text: "SSH/SHELL/BASH"},
                {text: "SQL/MSSQL/MySQL"},
                {text: "Source Code Management"},
                {text: "Code Security Management"},
                {text: "Virtualization & Automation"},
            ]},
            {title: "IT Networking", option:[
                {text: "Network Analysis"},
                {text: "Firewalls and security"},
                {text: "Networking - WAN, LAN etc."},
                {text: "Hardware Infrastructure"},
                {text: "DNS / Proxy"},
                {text: "MPLS"},
                {text: "File / Data Management"}
            ]},
            {title:"Photography & Graphics", option: [
                {text: "Adobe Photoshop"},
                {text: "Adobe Illustrator"},
                {text: "Adobe Lightroom"},
                {text: "Figma / Adobe XD"},
                {text: "Corel Draw / Paintshop"},
                {text: "Canva"},
            ]},
            {title:"Social Media & SEO", option: [
                {text: "Keyword Research"},
                {text: "Link Building"},
                {text: "Content Analysis & Research"},
                {text: "Content Control"},
                {text: "Manage Meta Tags"},
                {text: "Share Post on Social Media"},
                {text: "User Support"}
            ]},
            {title:"Video", option: [
                {text: "Adobe Premiere Pro"},
                {text: "Apple Final Cut Pro"},
                {text: "DaVinci Resolve"},
                {text: "Adobe After Effects"},
                {text: "Blender"},
            ]},
            {title:"Audio", option: [
                {text: "Adobe Audition"},
                {text: "Apple Logic Pro"},
                {text: "Nuendo"},
                {text: "Pro Tools"},
                {text: "Music Arrangement"},
                {text: "Recording, Audio Editing, Mixing & Mastering"},
            ]},
            {title:"Content Authoring", option: [
                {text: "Creative Writing"},
                {text: "Infographic Content"},
                {text: "Research"},
                {text: "Knowledge of other languages"},
            ]}
        ];
        this.types = [
            {title:"Volunteer", val: "volunteer", option:[
                {text: "Full time", val: "fulltime"},
                {text: "Part time", val: "parttime"},
                {text: "Remote", val: "remote"},
            ]},
            {title:"Employee", val: "employee", option:[]},
            {title:"Intern", val: "intern", option:[
                {text: "Full time", val: "fulltime"},
                {text: "Part time", val: "parttime"},
                {text: "Remote", val: "remote"},
            ]}
        ];
        //console.log(this.countries);
        
    }

    async componentDidMount(){
        try{
            //console.log(this.props.user)
            let data = window.localStorage.getItem('pdata');
            data = JSON.parse(data);
            //console.log(data);
            this.setState({
                data: data
            }, async () => {
                this.changeState({
                    type: "select",
                    name: "country",
                    ele: false,
                    target: {
                        value: data !== null ? data.country : '""',
                        getAttribute: (attr) => {
                            return {
                                name: "country"
                            }
                        }
                    }
                });
                await this.loadControls();
            });
        }catch(ex){
            //console.log(ex);
        }
        this.loadControls();
    }

    saveData = async(e) => {
        e.preventDefault();
        if(this.props.user !== null){
            let resp = await setDoc(doc(this.db, "profile", this.props.user.uid), this.state.data);
            //console.log(resp);
            if(resp === undefined){
                alert("Profile saved!")
            }
        }
    }

    getSkills = (spl) => {
        let skills = [];
        skills = Array.isArray(spl) ? spl.map((s) => { return this.skills.filter(x => x.title === s) }) : this.skills.filter(x => x.title === spl);
       
        if(Array.isArray(this.data.skills)){
            let chk = [];
            let data = this.state.data;
            data.skills.forEach((x)=> {
             //   //console.log(x);
                
                let tmp = skills.map((y)=>{
                    return y.map((z)=> {
                        let found = z.option.filter(i => i.text === x);
                        return found[0] !== undefined ? found[0].text : '';
                       // //console.log(found[0]);
                    });
                    //return y.filter(i => i.title === x);
                });
                tmp = tmp[0].filter(i => i !== '');
                if(tmp.length > 0){
                    chk.push(tmp[0])
                }
               // //console.log(tmp);
                //chk.push(tmp.join('-@-').replace('-@-',''));
                
                ////console.log(skills.filter(i => i.option.filter(j => j === x)));
            })
            chk = chk.filter(i => i !== '');
           // //console.log(chk);
           // //console.log(this.data.skills);
           // //console.log(skills);
           // data.skills = chk;
        }
       
        //
        return skills;
    }

    gettypes = (spl) => {
        let skills = [];
       //console.log(spl)
        skills = Array.isArray(spl) ? spl.map((s) => { return this.types.filter(x => x.val === s) }) : this.types.filter(x => x.val === spl);
       //console.log(skills);
       return skills[0] !== undefined ? skills[0].option : [];
    }

    loadControls = async (_state = this.state) => {
       // //console.log(_state.country);
       // //console.log(this.getModel('cover'));
        this.items = [
            {
                title: "Basic Detail",
                Que: [
                    {
                        title: "Applying as",
                        type: "radio",
                        name: "workas",
                        attr: {
                            onChange: this.updateModel,
                            checked: this.getModel('workas')
                        },
                        option: [
                            {text: "Volunteer", val: 'volunteer', defaultChecked: this.getModel('workas') === 'volunteer'},
                            {text: "Employee", val: 'employee', defaultChecked: this.getModel('workas') === 'employee'},
                            {text: "Intern", val: 'intern', defaultChecked: this.getModel('workas') === 'intern'},
                        ]
                    },{
                        title: "Work Type",
                        type: "radio-section",
                        name: "worktype",
                        dataChecked: this.getModel('worktype'),
                        attr: {
                            onChange: this.updateModel
                        },
                        option: this.gettypes(this.getModel('workas'))
                    },{
                        title: "Are you an alumni of Sri Sathya Sai Educational Institutions?",
                        name: "alumni",
                        type: "radio",
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('alumni')},
                        option: [
                            {text:'Yes', val: 'yes', defaultChecked: this.getModel('alumni') === 'yes'},
                            {text:'No', val: 'no', defaultChecked: this.getModel('alumni') === 'no'}
                        ],
                    },
                    {
                        title: "Cover Letter",
                        type: "textarea",
                        name: "cover",
                        attr: {
                            onChange: this.updateModel,
                            placeholder: "Describe your abilities to support the organisation.",
                            rows: "5",
                            maxLength: "500",
                            defaultValue: this.getModel('cover')
                        }
                    }
                ]
            },
            {
                title: "Personal Detail",
                Que: [
                    
                    {
                        title: "Your Name",
                        name: 'name',
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('name', this.props.user.displayName), required: true},
                    },
                    {
                        title: "Your Gender",
                        defaultValue: this.props.user.displayName,
                        name: 'gender',
                        type: 'radio',
                        option: [
                            {text:'Male', val: 'male', defaultChecked: this.getModel('gender') === 'male'},
                            {text:'Female', val: 'female', defaultChecked: this.getModel('gender') === 'female'},
                            {text:'Other', val: 'other', defaultChecked: this.getModel('gender') === 'other'}
                        ],
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('gender')}
                    },
                    {
                        title: "Date of Birth",
                        defaultValue: this.props.user.email,
                        name: 'dob',
                        type: 'date',
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('dob'), required: true}
                    },
                ]
            },{
                title: "Skills & Speciality",
                Que: [
                   
                    {
                        title: "Speciality",
                        type: "checkbox",
                        name: "speciality",
                        dataChecked: this.getModel('speciality'),
                        attr: {
                            onChange: this.updateModel
                        },
                        option: this.skills.map(item => ({text: item.title}))
                    },{
                        title: "Skills",
                        type: "checkbox-section",
                        dataChecked: this.getModel('skills'),
                        name: "skills",
                        attr: {
                            onChange: this.updateModel
                        },
                        option: this.getSkills(this.getModel('speciality'))
                    }
                ]
            },
            {
                title: "Contact Information",
                Que: [
                    {
                        title: "Your Email",
                        name: 'email',
                        attr: {defaultValue: this.props.user.email}
                    },
                    {
                        title: "Country",
                        name: "country",
                        type: "select",
                        country: _state.country,
                        selected: this.getModel('country'),
                        attr: {onChange: this.changeState, defaultValue: this.getModel('country'), required: true},
                        option: this.countries.map((c)=> {
                            return {text: c.name, val: JSON.stringify(c)}
                        })
                    },
                    {
                        title: "States",
                        name: "state",
                        type: "select",
                        country: _state.country,
                        selected: this.getModel('state'),
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('state')},
                        option: _state.states.map((c)=> {
                            return {text: c.name, val: JSON.stringify(c)}
                        })
                    },
                    {
                        title: "Your Phone Number",
                        name: 'phone',
                        type:'mobile',
                        country: _state.country,
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('phone', this.props.user.phoneNumber), placeholder:'Your Phone Number', required: true}
                    }
                ]
            },
            {
                title: "Work & Social Detail",
                Que: [
                    {
                        title: <><i className='fa-brands fa-linkedin'></i> LinkedIn </>,
                        type: "url",
                        name: "linkedIn"
                    },{
                        title: <><i className="fa-brands fa-github"></i> Github </>,
                        type: "url",
                        name: "github"
                    },
                    {
                        title:"Resume URL (Google Cloud, One Drive, Dropbox, etc.)",
                        type: "url",
                        name: "resume",
                        attr: {required: true}
                    }
                ]
            }
        ];

        this.setState({
            items: this.items
        })
    }

    changeState = (e) => {
        if(e.target.value !== undefined && e.target.value !== 'undefined'){
            const detail = JSON.parse(e.target.value);
            let states = State.getStatesOfCountry(detail.isoCode);
            let items = this.state.items;
            items = (items).map((x)=>{
                if(x.Que !== undefined){
                    x.Que = x.Que.map((q)=>{
                        if(q.name === 'states'){
                            q.option = states;
                            //console.log(q);
                        }
                        return q;
                    })
                }
               
                return x;
            })
            //console.log(items)
            this.setState({
                country: detail,
                states: states
            }, ()=> {
                this.updateModel(e);
                this.loadControls();
                //console.log(this.state.country)
            })
        }
        
        
    }

    getModel = (name, def = '') => {
        this.data = this.state.data === null ? {} : this.state.data;
        return this.data[name] !== undefined && this.data[name] !== null ? this.data[name] : def;
    }

    updateModel = async (e) => {
        let items = this.state.items;
        let data = this.state.data === null ? {} : this.state.data;
       let type = !e.ele && e.ele !== undefined ? e.type : e.target.getAttribute('type');
       let name = !e.ele && e.ele !== undefined ? e.name : e.target.getAttribute('name');
       if(e.ele === undefined){
        this.setState({
            changed: true
        })
       }
       //console.log(items);
       items.forEach((_item)=>{
        _item.Que.forEach((_que)=> {
            if(_que.type === 'radio' || _que.type === 'checkbox' || _que.type === 'radio-section' || _que.type === 'checbox-section'){
                if(_que.option.length < 1){
                    delete(data[_que.name]);
                }
            }
        })
       });
       
       //console.log(data);
       if(type === 'checkbox'){
        let checked = [];
        if(data[name] === undefined || !Array.isArray(data[name])){
            checked = [];
        }else{
            data[name].push(e.target.value);
            checked = [...new Set(data[name])];
            checked = !e.target.checked ? checked.filter(x => x !== e.target.value) : checked;
        }
        /*console.log(checked.map((x)=>{
            return e.target.checked ? x + " >>> Checked" : x;
        }))*/
        //console.log(name, e.target.checked)
        data[name] = checked;
       
       }else if(type === 'radio'){
        data[name] = e.target.value;
        //console.log(name, data[name]);
       }
       else{
            data[name] = e.target.value;
       }
        //console.log(data);
        this.setState({
            data: data
        }, async () => {
            await this.loadControls();
            window.localStorage.setItem('pdata', JSON.stringify(data));
        });
        
        ////console.log(data)
        
    }

    

    render(){
        return (<>
            <div className="profile">
                <form onSubmit={(e)=>{
                            e.preventDefault();
                            this.saveData(e);
                        }}>
                {
                Array.isArray(this.state.items) && (this.state.items).map((v,i)=>{
                   //  //console.log(this.state.items);
                        let que = v.Que !== undefined ? v.Que.map((x)=>{
                            ////console.log(x.option)
                            return _exe.renderControl(x, x.option)
                        }) : <></>;
                        return <>
                        
                        <div key={i} className="card mb-2">
                        {
                            <>
                            <div className="card-header">
                                {
                                    v.title
                                }
                            </div>
                            <div className="card-body">
                            {que}
                            </div>
                            {
                                this.state.changed && <div className="card-footer">
                                    <div className="row">
                                        <div className="col-6">
                                            {(this.state.index > 0) && <button type="button" className="btn btn-primary">Prev</button>}
                                        </div>
                                        <div className="col-6 text-end">
                                            <button type="submit" className="btn btn-primary">SAVE</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            </>
                        }</div>
                        
                        </>;
                    })
                }
                
                </form>
            </div>
            <div className="p-5"></div>
    </>)
    }
}

export default EditProfile;