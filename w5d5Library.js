class Track {

  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

function totalDuration(tracks) {
  let totalDuration = 0;
  for (oneTrack of tracks) {
    totalDuration += oneTrack.length;
    }
  return totalDuration;
}

function overallRating(tracks) {
  let totalRating = 0;
  let trackCounter = 0;
 for (oneTrack of tracks) {
   totalRating += oneTrack.rating;
   trackCounter++;
 }
 let overallRating = totalRating/trackCounter;
 return overallRating;
}

class Playlist {

  constructor(playlist_name, tracks) {
    this.tracks = tracks
    this.name = playlist_name;
    this.totalDuration = totalDuration(tracks);
    this.overallRating = overallRating(tracks);

  }
}

class Library {

  constructor(name, creator_name, playlists) {
    this.name = name;
    this.creator_name = creator_name;
    this.playlists = playlists;
  }
}




const tracks   = [new Track("song1", 1, 60), new Track("song2", 2, 120), new Track("song3", 3, 180)];
const newPlaylist = new Playlist("playlist1", tracks);
const newPlaylistAgain = new Playlist("playlist2", tracks);
const playlists = [newPlaylist, newPlaylistAgain];
const finalLibrary  = new Library("my library", "Michael", playlists);


console.log(finalLibrary);


