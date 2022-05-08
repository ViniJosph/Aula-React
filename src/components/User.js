import React from 'react';

import { EDIT_USER } from '../graphql/user/mutation';
import { useMutation } from '@apollo/client';
import { UserContext } from '../auth';

export default function EditUser({isEditUser}){
    const [text, setText] = React.useState("");
    const { currentUser } = React.useContext(UserContext);
    const [editUser] = useMutation(EDIT_USER);

    const image = React.useRef();

    if(isEditUser){
        if(!document.getElementById('editUser').classList.contains('show'))
            new window.bootstrap.Modal(document.getElementById('editUser')).show();
    }

    async function uploadImage(imagem){
        const formData = new FormData();
        formData.append('file', imagem);
        formData.append('upload_preset', 'senacgram');
        formData.append('cloud_name','thyagoquintas');
        const response = await fetch('http://api.cloudinary.com/v1_1/thyagoquintas/image/upload',{
            method: 'POST',
            accept: 'application/json',
            body: formData
        });
        const bodyJson = await response.json();
        return bodyJson.url;
    }

    async function handleEditUser(){
        let url = await uploadImage(image.current.files[0])
        
        const newUser = {
            name: text,
            image: url,
            userId: currentUser.id,
        }

        editUser({ variables : {
                image: newUser.image,
                name: newUser.name,
                userId: newUser.userId
            }
        });

        console.log(editUser);
    }





    return (
        <div className="modal" id="editUser" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edite seu usuario</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" placeholder='Digite um Texto' className='form-control my-2' value={text} onChange={(event)=>setText(event.target.value)} />
                        <input type="file" className='form-control my-2' ref={image} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleEditUser}>Editar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}