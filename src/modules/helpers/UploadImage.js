// import React, { useState } from 'react'

//  const UploadImage = async e => {

//     const [image, setImage] = useState('')

//     const files = e.target.files
//     const data = new FormData()
//     data.append('file', files[0])
//     data.append('upload_preset', 'tenders')
//     const res = await fetch(
//       '	https://api.cloudinary.com/v1_1/tenders/image/upload',
//       {
//         method: 'POST',
//         body: data
//       }
//     )
//     const file = await res.json()

//     setImage(file.secure_url)
//   }

// export default UploadImage