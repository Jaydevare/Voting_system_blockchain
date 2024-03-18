import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import {
  bufferToImage,
  detectAllFaces,
  euclideanDistance,
  nets,
} from "face-api.js";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

export default function temp() {
  var votingFace;
  const [startVoting, setStartVoting] = useState(false);
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  var image1;
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(async () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    // localStorage.setItem("file", JSON.stringify(pictureSrc));
    votingFace = dataURLtoFile(pictureSrc, "votingFace");
    image1 = await bufferToImage(votingFace);
    start();
  });

  async function start() {
    let descriptor1, descriptor2;

    try {
      descriptor1 = await detectAllFaces(image1)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const regFaceSrc = localStorage.getItem("file");
      const regFace = dataURLtoFile(JSON.parse(regFaceSrc), "regFace");
      const image2 = await bufferToImage(regFace);
      descriptor2 = await detectAllFaces(image2)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const distance = euclideanDistance(
        descriptor1[0].descriptor,
        descriptor2[0].descriptor
      );
      console.log(distance);
      if (distance < 0.35) {
        console.log(true);
      } else {
        console.log(false);
      }
    } catch (error) {
      // setFaceMatchError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    async function loadModels() {
      Promise.all([
        nets.faceRecognitionNet.loadFromUri("/models"),
        nets.faceLandmark68Net.loadFromUri("/models"),
        nets.ssdMobilenetv1.loadFromUri("/models"),
      ]);
    }
    loadModels();
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <div>
          <h2 className="mb-5 text-center">
            React Photo Capture using Webcam Examle
          </h2>
          <button
            onClick={() => {
              setStartVoting(true);
            }}
          >
            start
          </button>
          {startVoting ? (
            <div>
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                width={400}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                onTimeUpdate={() => {
                  setTimeout(() => {
                    capture();
                  }, 1000);
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
