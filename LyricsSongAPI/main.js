const URL = "https://api.lyrics.ovh",
  form = document.querySelector("form"),
  input = document.querySelector("#input"),
  button = document.querySelector("#search"),
  more = document.querySelector("#more");
result = document.querySelector("#result");
const searchSongs = async term => {
  const res = await fetch(`${URL}/suggest/${term}`);
  const data = await res.json();
  showData(data);
};

const showData = data => {
  let output = "";

  data.data.forEach(song => {
    output += ` 
        <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist=${song.artist.name} data-songtitle=${song.titlee}>Get Lyrics</button>
        </li>
        `;
  });
  result.innerHTML = `
    <ul class="songs">
    ${output}
    </ul>`;
   
  //     result.innerHTML = `
  //     <ul class="songs">
  //     ${data.data.map(song => {
  //          `<li>
  //          <span><strong>${song.artist.name}</strong> - ${song.title}</span>
  //       <button class="btn" data-artist=${song.artist.name} data-songtitle=${song.titlee}>Get Lyrics</button>
  //         </li> `
  //     }).join('')
  // }
  //     </ul>
  //     `

  console.log(`next is ${data.next} and prv is : ${data.prev}`);

  async function getMoreSongs(url) {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
  }

  if (data.prev || data.next) {
      
    more.innerHTML = `
    ${data.prev ? '<button class="btn" >Previous</button>' : ''}
    ${data.next ? '<button class="btn" onclick="getMoreSongs(`${data.next}`)">Next</button>':''}
    `
  } else {
    more.innerHTML=''
    }

  // if (data.prev || data.next) {
  //   more.innerHTML = `
  //       ${
  //         data.prev
  //           ? `<button class="btn" onclick="BackSongs(${data.prev})>Prev</button>`
  //           : ""
  //       }
  //       ${
  //         data.next
  //           ? `<button class="btn"  onclick="NextSongs(${data.next})>Next</button>`
  //           : ""
  //       }
  //       `;
  // } else {
  //   more.innerHTML = "";
  // }
};

form.addEventListener("submit", e => {
  e.preventDefault();
  const seartchTerm = input.value.trim();
  if (!seartchTerm) {
    alert("please type");
  } else {
    searchSongs(seartchTerm);
  }
});
