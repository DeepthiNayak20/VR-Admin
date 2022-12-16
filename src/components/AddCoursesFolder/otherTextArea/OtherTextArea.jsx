import axios from 'axios'
import { useState } from 'react'
import './OtherTextArea.css'
const OtherTextArea = () => {
  const [cloudinaryVideo, setcloudinaryVideo] = useState('')

  //cloudinary upload
  function uploadVideoPreview(e) {
    const cloudName = 'dtp1d46p6'
    const uploadPreset = 'j4ygtykr'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload/`
    const timestamp = Date.now() / 1000
    const previewVideo = e.target.files[0]
    console.log('files', previewVideo)

    let formData = new FormData()
    formData.append('api_key', '694173934399617')
    formData.append('file', previewVideo)
    formData.append('public_id', 'video') //this should be changed
    formData.append('timestamp', timestamp)
    formData.append('upload_preset', uploadPreset)

    axios
      .post(url, formData)
      .then((result) => {
        console.log('Result', result)
        setcloudinaryVideo(result)

        alert('Video upload successful')
        console.log('uploaded', result)
      })
      .catch((err) => {
        console.log(err)
        alert('upload failed')
      })
  }
  //cloudinary upload

  function uploadPhoto(e) {
    const cloudName = 'dtp1d46p6'
    const uploadPreset = 'j4ygtykr'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/photo/upload/`
    const timestamp = Date.now() / 1000
    const previewVideo = e.target.files[0]
    console.log('files', previewVideo)

    let formData = new FormData()
    formData.append('api_key', '694173934399617')
    formData.append('file', previewVideo)
    formData.append('public_id', 'video') //this should be changed
    formData.append('timestamp', timestamp)
    formData.append('upload_preset', uploadPreset)

    axios
      .post(url, formData)
      .then((result) => {
        console.log('Result', result)
        // setcloudinaryVideo(result)

        alert('Phto upload successful')
        console.log('uploaded', result)
      })
      .catch((err) => {
        console.log(err)
        alert('upload failed')
      })
  }

  return (
    <div>
      <div className="upload-videoCategoryFileds">
        <div>
          {' '}
          <div className="upload-title">Course&nbsp;Outcome</div>
          <div className="textarea-tagline">
            <textarea
              name="courseOutcome"
              className="upload-inputField "
              required
            ></textarea>
          </div>
        </div>
        <div>
          <div className="upload-title">Requirements</div>
          <div className="textarea-tagline">
            <textarea
              name="requirements"
              className="upload-inputField "
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="upload-videoCategoryFiles">
        <div>
          {' '}
          <div className="upload-title">Course Thumbnail</div>
          <input
            type="file"
            onChange={(e) => {
              uploadPhoto(e)
            }}
            name="imageUpload"
            accept="image/png, image/jpeg"
            placeholder="Video Title"
            className="upload-inputField title"
            required
          />
        </div>
        <div>
          <div className="upload-title">Preview Video</div>
          <input
            type="file"
            name="videoUpload"
            onChange={(e) => {
              uploadVideoPreview(e)
            }}
            accept="video/*"
            placeholder="Video Category"
            className="upload-inputField category"
            required
          />
        </div>
      </div>
      <div className="upload-difficultyLevel">
        <div>
          <div className="upload-title">Difficulty&nbsp;Level</div>
          <div className="upload-videoTitle">
            <select name="difficultyLevel" className="upload-select">
              <option
                value="Chapter 1 - Setting up a new project"
                className="QandA-option"
              >
                Setting up a new project
              </option>
              <option value="Chapter 2 - ReactJS"> ReactJS</option>
              <option value=" Chapter 3 - Web design">Web design</option>
            </select>
          </div>
        </div>
        <div>
          <div className="upload-title">Course&nbsp;Keyword</div>
          <input
            type="text"
            name="courseKeyWord"
            placeholder="Course Keyword"
            className="upload-inputField category"
          />
        </div>
      </div>
    </div>
  )
}

export default OtherTextArea
