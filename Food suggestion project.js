let text = document.getElementById('text');
let password = document.getElementById('password');

function changeThemeClick() {
    document.getElementById("changeTheme").classList.add('back-gradient')
    document.getElementById('head').style.color = '#000000'
    document.getElementById('head-para').style.color = '#000000'
    document.getElementById('btn-bg').style.color = '#ffffff'
    document.getElementById('btn-bg').style.textDecoration = 'underline'
    document.getElementById('nav-change').style.backgroundColor = '#000000'
    document.getElementById('top-text').style.color = '#ffffff'
    document.getElementById('top-price').style.color = '#ffffff'
    document.getElementById('top-name').style.color = '#ffffff'
    document.getElementById('change-card').classList.add('card-shadow')
    document.getElementById('nav-btn').classList.add('bbbb')
}
const apiKey = 'T2lss37haXvKFNVpL5gkA5ecbDjIhXmuay0koKtSJETIIvBik4oppAwH'; // Replace with your Pexels API key

function fetchurl() {
    const query = document.getElementById('dishName').value;
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

    fetch(url, {
            headers: {
                Authorization: apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const imageDiv = document.getElementById('dishImage');
            imageDiv.innerHTML = ''; // Clear previous image

            if (data.photos.length > 0) {
                const photo = data.photos[0];
                const img = document.createElement('img');
                img.src = photo.src.medium;
                img.alt = photo.alt;
                img.style.width = '300px'; // Adjust the size as needed
                imageDiv.appendChild(img);
            } else {
                imageDiv.innerHTML = 'No images found.';
            }
        })
        .catch(error => console.error('Error fetching images:', error));
}

function clickme() {
    if (text.value === '') {
        document.getElementById('errorName').textContent = '*Required'
    }
    if (password.value === '') {
        document.getElementById('errorPassword').textContent = '*Required'
    }
    if ((text.value !== '') && (password.value !== "")) {
        let Display = document.getElementById('Display')
        Display.textContent = 'Hii ' + text.value + '! Welcome to Food Guide'
        Display.classList.add('displayBox')
        document.getElementById('errorName').textContent = ''
        document.getElementById('errorPassword').textContent = ''
        text.value = ''
        password.value = ''
        alert('Congratulations! You have successfully Logged In')
        document.getElementById("displaystyle").style.display = 'block'
    }

}