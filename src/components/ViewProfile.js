import React from "react";
import { Country, State, City }  from 'country-state-city';
import _exe from "../inc/exe";

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
        this.data = {}
        this.countries = Country.getAllCountries();
        this.skills = [
            {title:"Web & App UI/UX designing and development", option:[
                
                {text: "NodeJS"},
                {text: "CSS/HTML"},
                {text: "jQuery/Ajax"},
                {text: "Javascript"},
                {text: "Bootstrap"},
                {text: "ReactJS"},
                {text: "Angular"},
                {text: "React Native"},
                {text: "PHP"},
                {text: "WordPress"},
                {text: "API Integration"},
                {text: "Android - Kotlin"},
                {text: "iOS - Swift"},
            ]},
            {"title": "Data Science & DevOps", option:[
                {text: "Docker"},
                {text: "Linux Fundamentals"},
                {text: "Github"},
                {text: "Kubernetes"},
                {text: "Firebase"},
                {text: "Cloud Computing"},
                {text: "MongoDB"},
                {text: "NodeJS/ExpressJS"},
                {text: "SSH/SHELL/BASH"},
                {text: "Source Code Management"},
                {text: "Code Security Management"}
            ]},
            {title: "IT Networking", option:[
                {text: "Network Analysis"},
                {text: "Firewalls and security"},
                {text: "Networking - WAN, LAN etc."},
                {text: "Network Programming"},
                {text: "Hardware Infrastructure"},
                {text: "DNS / Proxy"},
                {text: "iOT"},
                {text: "Virtualization & Automation"},
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
            {title:"Video making and editing", option: [
                {text: "Adobe Premiere Pro"},
                {text: "Apple Final Cut Pro"},
                {text: "DaVinci Resolve"},
                {text: "Adobe After Effects"},
                {text: "Lightworks"},
            ]},
            {title:"Music compose and tuning", option: [
                {text: "Adobe Audition"},
                {text: "Apple Logic Pro"},
                {text: "FL Studio"},
                {text: "GarageBand"},
                {text: "Audacity"},
                {text: "Sound Forge"},
            ]},
            {title:"Unique content authoring", option: [
                {text: "Creative Wrting"},
                {text: "Infographic Content"},
                {text: "Research"}
            ]}
        ]
        console.log(this.countries);
        
    }

    async componentDidMount(){
        try{
            let data = window.localStorage.getItem('pdata');
            data = JSON.parse(data);
            console.log(data);
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
            console.log(ex);
        }
        this.loadControls();
    }

    getSkills = (spl) => {
        let skills = [];
        skills = Array.isArray(spl) ? spl.map((s) => { return this.skills.filter(x => x.title === s) }) : this.skills.filter(x => x.title === spl);
       
        if(Array.isArray(this.data.skills)){
            let chk = [];
            let data = this.state.data;
            data.skills.forEach((x)=> {
             //   console.log(x);
                
                let tmp = skills.map((y)=>{
                    return y.map((z)=> {
                        let found = z.option.filter(i => i.text === x);
                        return found[0] !== undefined ? found[0].text : '';
                       // console.log(found[0]);
                    });
                    //return y.filter(i => i.title === x);
                });
                tmp = tmp[0].filter(i => i !== '');
                if(tmp.length > 0){
                    chk.push(tmp[0])
                }
               // console.log(tmp);
                //chk.push(tmp.join('-@-').replace('-@-',''));
                
                //console.log(skills.filter(i => i.option.filter(j => j === x)));
            })
            chk = chk.filter(i => i !== '');
           // console.log(chk);
           // console.log(this.data.skills);
           // console.log(skills);
           // data.skills = chk;
        }
       
        //
        return skills;
    }

    loadControls = async (_state = this.state) => {
       // console.log(_state.country);
       // console.log(this.getModel('cover'));
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
                            {text: "A Volunteer", val: 'volunteer', defaultChecked: this.getModel('workas') === 'volunteer'},
                            {text: "An Employee", val: 'employee', defaultChecked: this.getModel('workas') === 'employee'},
                            {text: "An intern", val: 'intern', defaultChecked: this.getModel('workas') === 'intern'},
                        ]
                    },{
                        title: "Work Type",
                        type: "radio",
                        name: "worktype",
                        attr: {
                            checked: this.getModel('worktype'),
                            onChange: this.updateModel
                        },
                        option: [
                            {text: "Full Time", val: 'full', defaultChecked: _state.data['worktype'] === 'full'},
                            {text: "Part Time", val: 'part', defaultChecked: _state.data['worktype'] === 'part'},
                            {text: "Remote Work", val: 'remote', defaultChecked: _state.data['worktype'] === 'remote'},
                        ]
                    },{
                        title: "Are you alumni of Sri Sathya Sai Institute?",
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
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('name', this.props.user.displayName)}
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
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('dob')}
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
                        option: [
                            {text:"Web & App UI/UX designing and development"},
                            {text:"Data Science & DevOps"},
                            {text:"IT Networking"},
                            {text:"Photography & Graphics"},
                            {text:"Social Media & SEO"},
                            {text:"Video making and editing"},
                            {text:"Music compose and tuning"},
                            {text:"Unique content authoring"}
                        ]
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
                        attr: {onChange: this.changeState, defaultValue: this.getModel('country')},
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
                        attr: {onChange: this.updateModel, defaultValue: this.getModel('phone', this.props.user.phoneNumber), placeholder:'Your Phone Number'}
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
                        title: <><i class="fa-brands fa-github"></i> Github </>,
                        type: "url",
                        name: "github"
                    },
                    {
                        title:"Resume URL (Google Cloud, One Drive, Dropbox, etc.)",
                        type: "url",
                        name: "resume",
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
                            console.log(q);
                        }
                        return q;
                    })
                }
               
                return x;
            })
            console.log(items)
            this.setState({
                country: detail,
                states: states
            }, ()=> {
                this.updateModel(e);
                this.loadControls();
                console.log(this.state.country)
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
       if(type === 'checkbox'){
        let checked = [];
        if(data[name] === undefined || !Array.isArray(data[name])){
            checked = [];
        }else{
            data[name].push(e.target.value);
            checked = [...new Set(data[name])];
            checked = !e.target.checked ? checked.filter(x => x !== e.target.value) : checked;
        }
        console.log(checked.map((x)=>{
            return e.target.checked ? x + " >>> Checked" : x;
        }))
        console.log(name, e.target.checked)
        data[name] = checked;
       
       }else{
            data[name] = e.target.value;
       }
        console.log(data);
        this.setState({
            data: data
        }, async () => {
            await this.loadControls();
            window.localStorage.setItem('pdata', JSON.stringify(data));
        });
        
        //console.log(data)
        
    }

    

    render(){
        return (<>
            <div className="profile">
                {
                Array.isArray(this.state.items) && (this.state.items).map((v,i)=>{
                   //  console.log(this.state.items);
                        let que = v.Que !== undefined ? v.Que.map((x)=>{
                            //console.log(x.option)
                            return _exe.renderControl(x, x.option)
                        }) : <></>;
                        return <>
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
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
                                            {(this.state.index > 0) && <button className="btn btn-primary">Prev</button>}
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-primary">SAVE</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            </>
                        }</div>
                        
                        </form>
                        </>;
                    })
                }
                
            </div>
    </>)
    }
}

export default EditProfile;