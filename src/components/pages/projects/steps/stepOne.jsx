import { Cash, Delete, Document, Image } from '@/components/atoms/icons';
import InputBox from '@/components/molecules/inputBox/inputBox'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import { ImCheckboxChecked } from 'react-icons/im'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '@/components/atoms/buttons/button';
import { notify } from '@/config/error';
import toast, { Toaster } from "react-hot-toast";



const StepOne = () => {

    const [logo, setLogo] = useState(null)
    const [logoKey, setLogoKey] = useState(Math.random());

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        setLogo(file);
        setLogoKey(Math.random());
    };
    const handleLogoDelete = () => {
        setLogo(null);
        setLogoKey(Math.random());
    }

    const [main, setMain] = useState(null)
    const [mainKey, setMainKey] = useState(Math.random());

    const handleMainUpload = (event) => {
        const file = event.target.files[0];
        setMain(file);
        setMainKey(Math.random());
    };
    const handleMainDelete = () => {
        setMain(null);
        setMainKey(Math.random());
    }


    const [select, setSelect] = useState(false)
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleAddType = (item) => {
        if (selectedTypes.includes(item)) {
            setSelectedTypes(selectedTypes.filter((i) => i !== item));
        } else {
            setSelectedTypes([...selectedTypes, item]);
        }
    };

    const [descriptionMedia, setDescriptionMedia] = useState(null)
    const [descriptionMediaKey, setDescriptionMediaKey] = useState(Math.random());

    const handleDescriptionMediaUpload = (event) => {
        const file = event.target.files[0];
        setDescriptionMedia(file);
        setDescriptionMediaKey(Math.random());
    };
    const handleDescriptionMediaDelete = () => {
        setDescriptionMedia(null);
        setDescriptionMediaKey(Math.random());
    }

    const [brochure, setBrochure] = useState(null)
    const [brochureKey, setBrochureKey] = useState(Math.random());

    const handleBrochureUpload = (event) => {
        const file = event.target.files[0];
        setBrochure(file);
        setBrochureKey(Math.random());
    };
    const handleBrochureDelete = () => {
        setBrochure(null);
        setBrochureKey(Math.random());
    }

    const [unitTypeList, setUnitTypeList] = useState([
        { img: "/images/newProject/commercial.png", title: "commercial" },
        { img: "/images/newProject/residential.png", title: "residential" },
        { img: "/images/newProject/hotel.png", title: "hotel" },
    ])

    const [name_en,setName_en] = useState('')
    const handleENNameChange = (event) => {
      setName_en(event);
    };

    const [name_ar,setName_ar] = useState('')
    const handleArNameChange = (event) => {
        setName_ar(event);
    };

    const [slogan_en,setSlogan_en] = useState('')
    const handleENSloganChange = (event) => {
        setSlogan_en(event);
    };

    const [slogan_ar,setSlogan_ar] = useState('')
    const handleArSloganChange = (event) => {
        setSlogan_ar(event);
    };

    const [description_en,setDescription_en] = useState('')
    const handleENDescriptionChange = (event) => {
        setDescription_en(event);
    };

    const [description_ar,setDescription_ar] = useState('')
    const handleArDescriptionChange = (event) => {
        setDescription_ar(event);
    };

    const [startingPrice,setStartingPrice] = useState('')


    const handleSave = () => {
        var err = [];
        if (name_en.length < 3) {
            err.push("Please enter a valid en name");
        }
        if (name_ar.length < 3) {
            err.push("Please enter a valid ar name");
        }
        if (slogan_en.length < 3) {
            err.push("Please enter a valid en slogan");
        }
        if (slogan_ar.length < 3) {
            err.push("Please enter a valid ar slogan");
        }
        if (selectedTypes.length < 1) {
            err.push("Please select a valid types");
        }
        if (!logo) {
            err.push("Please select a valid Logo");
        }
        if (!main) {
            err.push("Please select a valid hero Image");
        }
        if (startingPrice.length < 3) {
            err.push("Please Enter a valid starting price");
        }
        if (!descriptionMedia) {
            err.push("Please select a valid description Image");
        }
        if (!brochure) {
            err.push("Please select a valid brochure");
        }
        if (err.length > 0) {
            notify(err[0]);
        } 
    }



    return <>
        <div className="step">
            <section>
                <h6 className="title">Hero Section</h6>
                <div className="row mt-4 ">
                    <div className='col-md-4' >
                        <InputBox value={name_en} valueChange={handleENNameChange} dataInput label="Project Name" placeholder="Add Project Name" />
                    </div>
                    <div className='col-md-4 alCenter' >
                        <div className='centerItem photoUpload logoUpload' >
                            <input type="file" onChange={handleLogoUpload} id="logo" accept="image/*" hidden />
                            {!logo ?
                                <label htmlFor='logo'>
                                    <Image /> Add the Logo here
                                </label>
                                :
                                <div className="imgView">
                                    <button onClick={handleLogoDelete}><Delete /></button>
                                    <img key={logoKey} src={URL.createObjectURL(logo)} alt="" />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <InputBox value={name_ar} valueChange={handleArNameChange} ar dataInput label="اسم المشروع" placeholder="اضف اسم المشروع" />
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <InputBox value={slogan_en} valueChange={handleENSloganChange} dataInput label="Project slogan" placeholder="Add Project slogan" />
                    </div>
                    <div className="col-md-4 alCenter">
                        <div className="centerItem photoUpload logoUpload">
                            <input type="file" onChange={handleMainUpload} id="main" accept="image/*" hidden />
                            {!main ?
                                <label htmlFor='main'>
                                    <Image /> Add the Hero image here
                                </label>
                                :
                                <div className="imgView">
                                    <button onClick={handleMainDelete}><Delete /></button>
                                    <img key={mainKey} src={URL.createObjectURL(main)} alt="" />
                                </div>
                            }

                        </div>
                    </div>
                    <div className="col-md-4">
                        <InputBox value={slogan_ar} valueChange={handleArSloganChange} ar dataInput label="شعار المشروع" placeholder="اضف شعار المشروع " />
                    </div>
                </div>
                <div className='row justify-content-between' >
                    <div className="col-md-4">
                        <div className='select inputSelect' >
                            <button onClick={() => setSelect(!select)} className={`singleSelect ${select && 'open'}`}>
                                <span>
                                    {selectedTypes.length ?
                                        selectedTypes.map((item, i) => (
                                            <span key={i}>{item.title}</span>
                                        ))
                                        :
                                        'Select Project Type'
                                    }
                                </span>
                                <BsChevronDown />
                            </button>

                            <div className={`selectMenu ${select && 'open'}`}>
                                {unitTypeList.map((item, i) => (
                                    <div key={i} className="service" onClick={() => handleAddType(item)}>
                                        <div className="serviceData">
                                            <img src={item.img} alt="" />
                                            <h6>{item.title}</h6>
                                        </div>
                                        {selectedTypes.includes(item) ?
                                            <ImCheckboxChecked />
                                            :
                                            <AiOutlinePlus />
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 alCenter mt-2">
                        <div className="centerItem photoUpload">
                            <div  >
                                <Cash /> <input value={startingPrice} onChange={e=> setStartingPrice(e.target.value)} type="number" placeholder='Type starting price' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </section>
            <section>
                <h6 className="title">Overview Section</h6>
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <InputBox value={description_en} valueChange={handleENDescriptionChange} textarea dataInput label="Project details" placeholder="Add Project details" />
                    </div>
                    <div className="col-md-4 alCenter">
                        <div className="centerItem photoUpload logoUpload">
                            <input type="file" onChange={handleDescriptionMediaUpload} id="descriptionMedia" accept="image/*" hidden />
                            {!descriptionMedia ?
                                <label htmlFor='descriptionMedia'>
                                    <Image /> Add the image here
                                </label>
                                :
                                <div className="imgView">
                                    <button onClick={handleDescriptionMediaDelete}><Delete /></button>
                                    <img key={descriptionMediaKey} src={URL.createObjectURL(descriptionMedia)} alt="" />
                                </div>
                            }
                        </div>

                        <div className="centerItem photoUpload logoUpload">
                            <input type="file" onChange={handleBrochureUpload} id="brochure" accept="application/pdf" hidden />
                            {!brochure ?
                                <label htmlFor='brochure'>
                                    <Document /> Add project brochure
                                </label>
                                :

                                <div className="imgView">
                                    <button onClick={handleBrochureDelete}><Delete /></button>
                                    <embed key={brochureKey} src={URL.createObjectURL(brochure)} type="application/pdf" width="45" height="55" />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <InputBox value={description_ar} valueChange={handleArDescriptionChange} textarea ar dataInput label="تفاصيل المشروع" placeholder="اضف تفاضيل المشروع" />
                    </div>
                </div>
            </section>
            <div className="buttons">
                <Button primary onClick={handleSave} >Next Step</Button>
            </div>
            <Toaster position="bottom-left" reverseOrder={true} />

        </div>
    </>
}

export default StepOne