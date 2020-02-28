var fish_url_string = "file:///C:/Users/Daniel/Desktop/Fiskeside/dist/sub-pages/fish-specific.html?id=1"; //window.location.href
var fish_url = new URL(fish_url_string);
var c = fish_url.searchParams.get("id");
console.log(c);
