import React,{useState}from 'react'

const Upload = () => {

    const [imageDataUrl, setImageDataUrl] = useState("")
    const handlechange = (e) => {
        console.log(e.target.files);
        // Get the single/individual file
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend= () => {
            setImageDataUrl(reader.result)
        };
        reader.onerror = () => {
            console.log('AHHHHHHH')
        }

    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submitting");
        try {
           const res = await fetch ('/', {
            method:'POST',
            body: imageDataUrl
        })

        const data = res.json();
        console.log(data)
        } catch (err) {
            console.error (err)
        }
        
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="file" >Upload your setup</label>
                  <input type="file" name="file" className="form-control-file" onChange= {handlechange}/>
                </div> 
                <button type="submit" className="btn btn-primary mb-2"  disabled={!imageDataUrl}> Upload</button>
            </form>
            {imageDataUrl && (
                <img className = "img img-fluid" src= {imageDataUrl} alt= "Desk Setup" />
            )}
        </div>
    )
}

export default Upload
