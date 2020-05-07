const songs = [
    "AronChupa_-_I'm_an_Albatraoz__OFFICIAL_VIDEO(256k).mp3",
    "Imagine_Dragons_-_Believer(128k).mp3",
    "Imran_Khan_-_Amplifier_(Official_Music_Video)(128k).mp3",
    "Taylor_Swift_-_Blank_Space(128k).mp3",
    "Tujhe Kitna Chahne Lage - Kabir Singh 320 Kbps.mp3",
]
const createsonglist = () => {
    const list = document.createElement('ol')

    for(let i=0; i<songs.length; i++){
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list
}

document.getElementById('songlist').appendChild(createsonglist())

songlist.onclick = (e) => {
   // console.log(e);
   const clickedItem = e.target
    const source = document.getElementById('source')
    source.src='songs/' + clickedItem.innerText
    
    document.getElementById('currentlyplay').innerText= "Currently playing:"
    document.getElementById('currentsong').innerText= clickedItem.innerText

    player.load()
    player.play()
}

const playAudio = () =>{
    if(player.readyState)
    player.play()
}

const pauseAudio = () =>
{
    player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = (e) =>{
    const volume = e.target.value
    player.volume = volume
}
var song = new Audio();
song.addEventListener('timeupdate', function () {
    var pos = song.currentTime / song.duration;
    fill.style.width = pos * 100 + '%';
    handler.style.marginLeft = pos * 100 + '%';
});