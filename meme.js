document.getElementById('memeForm').addEventListener('submit', function(event) {
event.preventDefault();

const imageLink = document.getElementById('imageLink').value.trim();
const topText = document.getElementById('topText').value.trim();
const bottomText = document.getElementById('bottomText').value.trim();

if (!imageLink) {
    alert('Please enter an image URL');
return;
}
if (!topText) {
    alert('Please enter the top text');
    return;
}

if (!bottomText) {
    alert('Please enter the bottom text');
    return;
}

if (!topText && !bottomText) {
    alert('Please enter text');
    return;
}

const memeContainer = document.getElementById('memeContainer');
const memeDiv = document.createElement('div');
memeDiv.className = 'meme';

const img = new Image();
img.src = imageLink;
img.alt = 'Meme Image';
img.style.width = '500px';

const topDiv = document.createElement('div');
const bottomDiv = document.createElement('div');
topDiv.className = 'text-top';
bottomDiv.className = 'text-bottom';
topDiv.textContent = topText;
bottomDiv.textContent = bottomText;

const deleteButton = document.createElement('button');
deleteButton.className = 'delete-btn';
deleteButton.textContent = 'Delete';
deleteButton.onclick = function() {
    memeContainer.removeChild(memeDiv);
}

memeDiv.appendChild(img);
memeDiv.appendChild(topDiv);
memeDiv.appendChild(bottomDiv);
memeDiv.appendChild(deleteButton);

memeContainer.appendChild(memeDiv);

document.getElementById('memeForm').reset();
});