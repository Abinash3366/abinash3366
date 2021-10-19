let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(matched)
     document.getElementById("style").setAttribute("href", "assets/dark_style.css");
else
    console.log('Currently not in dark mode');