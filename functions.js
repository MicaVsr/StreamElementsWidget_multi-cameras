var obsNinjaLink = '';
var flipHorizontal = false;
var cameraWidth = 0;
var topPosition = 0;
var leftPosition = 0;


window.addEventListener('onWidgetLoad', function (obj) {
    setFieldsData(obj);  	
  	addIframeToContainer();
});

function setFieldsData(obj) {
	const fieldData = obj.detail.fieldData;
  	obsNinjaLink = fieldData.obsNinjaLink;
  	cameraId = fieldData.cameraId;
  	flipHorizontal = fieldData.flipHorizontal;
  	cameraWidth = fieldData.cameraWidth
  	topPosition = fieldData.topPosition;
	leftPosition = fieldData.leftPosition;
}

function addIframeToContainer() {
	var iframe = document.createElement('iframe');
  	var newCameraWidth = 100 + cameraWidth;
  	var newCameraHeight = 100 + cameraWidth;
  
  	console.log(cameraWidth);
 	console.log(newCameraWidth+'%');
  	console.log(newCameraWidth);
  	console.log(topPosition);
  	console.log(topPosition+'px');
  
    iframe.style.width = newCameraWidth+'%';
  	iframe.style.height = newCameraHeight+'%';
  	iframe.style.position = 'relative';
  	iframe.style.top = topPosition+'px';
  	iframe.style.left = leftPosition+'px';
  	iframe.style.transform = flipHorizontal ? 'scaleX(-1)' : '';
  
	iframe.src = obsNinjaLink;
  	iframe.width = 1920;
  	iframe.height = 1080;
  	var iframeContainer = document.getElementById('iframeContainer');
  	if(iframeContainer) iframeContainer.appendChild(iframe);
}
