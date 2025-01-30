import './body.css';

function Body() {
  return (
    <div class="center">
        <div class="container">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"/>
            <div class="searchBarContainer">
                <input class="searchbar" type="text" title="Search"/>
                <div class="search-bar-parent-image">
                    <a href="#"> <img class="search-bar-image" src="./images/Google_mic.svg.png"
                        title="Search by Voice"/></a>
                <a href="#"> <img class="search-bar-image" src="./images/ss.png"
                        title="Search by Lens"/></a>
                </div>
            </div>
            <a href="" class="search-button">Google Search</a><a href="https://doodles.google/"
                class="search-button">I'm Feeling Lucky</a><br/>
            <span class="offering"> Google offered in: <a href="" class="languages"> हिन्दी </a><a href=""
                    class="languages"> বাংলা </a><a href="" class="languages"> తెలుగు </a><a href="" class="languages">
                    मराठी </a><a href="" class="languages"> தமிழ் </a><a href="" class="languages"> ગુજરાતી </a><a
                    href="" class="languages"> ಕನ್ನಡ </a><a href="" class="languages"> മലയാളം </a><a href=""
                    class="languages"> ਪੰਜਾਬੀ </a></span>
        </div>
    </div>
  );
}

export default Body;
