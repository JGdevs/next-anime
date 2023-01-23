const createVideoUrl = (str,str2) => str.concat(' ',str2).replace(/[^a-zA-Z0-9 ]/g,'').replaceAll(' ','-').toLowerCase();

export default createVideoUrl;