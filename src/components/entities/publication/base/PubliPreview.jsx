// import '../../../../css/entities/publication/publipreview.css'
import React from 'react';

const PubliPreview = () => {
    return (
        <>
            <div className='preview'>
                <h2>Previsualización</h2>
                <div className='mt-4'>
                    <h5>Title</h5>
                    <div className='mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eveniet praesentium nam quae inventore alias quam atque vero. 
                        Rerum repellendus, officiis dicta, odit labore sit modi molestiae 
                        quisquam maxime perspiciatis blanditiis.Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Eveniet praesentium nam quae inventore 
                        alias quam atque vero. Rerum repellendus, officiis dicta, odit labore 
                        sit modi molestiae quisquam maxime perspiciatis blanditiis.
                    </div>
                    <div className='mb-2'>
                        Ubicación: Eveniet praesentium nam quae inventore alias quam atque vero
                    </div>
                    <div className='mb-2'>
                        Situación: Perdido
                    </div>
                    <div className='mb-2'>
                        Imágenes:
                    </div>
                </div>
            </div>
        </>
    );
};

export default PubliPreview;