class exe{
   

    static renderControl = (x, option = []) => {
        let type = x.type === undefined ? '' : x.type;
        switch(type){
            case 'image':
            return <div className="form-group text-end">
                <img alt={x.title} {...x.attr} />
            </div>
            case 'checkbox-section':
            return <>
            {option.length > 0 && <div className="form-group">
                <h4 className='m-0'>{x.title}</h4>
                <ul className='list-group'>
                {
                    option.map((v,i)=>{
                        return v.map((w,j)=>{
                            return <li className='list-group-item'>
                                <h6 className='m-0 mb-1 text-dark' key={j}>{w.title}</h6>
                                {
                                    w.option.map((z,k)=>{
                                        return <div key={k} className="form-check form-check-inline">
                                            <input type="checkbox"  {...x.attr} id={x.name + `_${i}_${j}_${k}` } name={x.name} className="form-check-input" checked={x.dataChecked.includes(z.text)} defaultValue={z.text} /> <label className="form-check-label" htmlFor={x.name + `_${i}_${j}_${k}` }>{z.text}</label>
                                        </div>
                                    })
                                }
                            </li>
                        });
                        
                    })
                }
                </ul>
                
                <div className="p-2"></div>
            </div>}
            </>;
            case 'checkbox':
            return <div className="form-group">
                <h6>{x.title}</h6>
                
                {
                    option.map((v,i)=>{
                        return <div key={i} className="form-check form-check-inline">
                            <input type="checkbox"  {...x.attr} id={x.name + '_' + i } name={x.name} className="form-check-input" checked={x.dataChecked.includes(v.text)} defaultValue={v.text} /> <label className="form-check-label" htmlFor={x.name + '_' + i }>{v.text}</label>
                        </div>
                    })
                }
                
                <div className="p-2"></div>
            </div>;
            case 'radio':
            
            return <div className="form-group">
                <h6>{x.title}</h6>
                
                {
                    option.map((v,i)=>{
                        return <div key={i} className="form-check form-check-inline">
                         <input type="radio" {...x.attr} id={x.name + v.val} name={x.name} checked={v.defaultChecked} className="form-check-input" defaultValue={v.val} /> <label className="form-check-label" htmlFor={x.name + v.val}>{v.text}</label>
                        </div>
                    })
                }
                
                <div className="p-2"></div>
            </div>;
            case 'date':
            return <div className="form-group">
                <label>{x.title}</label>
                <input type="date" name={x.name} className="form-control" {...x.attr} />
                <div className="p-2"></div>
            </div>;
            case 'select':
                //console.log(x.selected);
                
            return <div className="form-group">
                <h6>{x.title}</h6>
                <select id={x.name} name={x.name} {...x.attr} className="form-control">
                <option value={''}>Select your {x.name}</option>
                {
                    option.map((v, i)=>{
                        return <option key={i} value={v.val} selected={x.selected === v.val}>{v.text}</option>
                    })
                }
                </select>
                <div className="p-2"></div>
            </div>;
            case 'mobile':
            return <>
            <h6>{x.title}</h6>
            <div className="input-group mb-2">
                <span className="input-group-text" id="basic-addon1">{x.country !== null ? `${x.country.flag} +${x.country.phonecode}` : ""}</span>
                <input type="text" className="form-control" name={x.name} {...x.attr} aria-label={x.name} aria-describedby="basic-addon1" />
                <input type="hidden" className="form-control" name={`phoneCode`} value={x.country !== null ? `${x.country.phonecode}` : ""}  />
            </div>
            </>
            case 'textarea':
            return <div className="form-group">
                <label>{x.title}</label>
                <textarea className="form-control"  name={x.name} {...x.attr}  ></textarea>
                <div className="p-2"></div>
            </div>
            case 'sep':
            return <div {...x.attr}>{x.content}</div>
            default: 
            return <div className="form-group">
                <label>{x.title}</label>
                <input type={x.type} className="form-control"  name={x.name} {...x.attr}  />
                <div className="p-2"></div>
            </div>
        }
    }
}

export default exe;