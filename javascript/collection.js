const content = document.getElementById('content');

const articles = document.getElementsByTagName("article");

fetch("javascript/collection.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            content.insertAdjacentHTML('beforeend', `
                <div class="covers">
                    <img src="${post.imageUrl}"></img>
                    <br>
                    <div class="text">
                        <p>${post.title}</p>
                        <br>
                        <p>${post.artist}</p>
                        <br>
                        <p>${post.releaseYear}</p>
                        <br>
                        <p>Top Pick: ${post.favoriteSong}</p>
                        <br>
                        <a href="${post.streamUrl}">Listen</a>
                    </div>                        
                </div>
                `)
        });
    });

    // .then(value => console.log(value))
    // .then(values => values.forEach(value => console.log(value)))
    // .then(values => values.forEach(value => console.log(value.title)))
    // .catch(error => console.error(error));