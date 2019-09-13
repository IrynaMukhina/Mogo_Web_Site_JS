/* eslint-disable max-len */
const blogHeadings = [...document.querySelectorAll('.blog_heading'),
  ...document.querySelectorAll('.footer_blog_heading')];
const blogsText = [...document.querySelectorAll('.blog_text')];
const blogComments = [...document.querySelectorAll('.blog_comment')];
const blogWatched = [...document.querySelectorAll('.blog_watched')];
const blogPicture = [...document.querySelectorAll('.blog_picture'),
  ...document.querySelectorAll('.blog_footer_picture')];
const blogDate = [...document.querySelectorAll('.blog_published')];

const keysObj = {
  'title': blogHeadings,
  'description': blogsText,
  'comments': blogComments,
  'watched': blogWatched,
  'previewImg': blogPicture,
  'published': blogDate,
};

const blogArr = Object.entries(keysObj);

function fillInformation(from, to, key) {
  const toLength = to.length;

  for (let i = 0; i < toLength; i++) {
    to[i].innerHTML = from[i][key];

    if (key === 'published') {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};

      to[i].innerHTML = new Date(from[i][key]).toLocaleDateString('en-US', options);
    }

    if (key === 'previewImg') {
      to[i].src = from[i][key];
    }
  }
}

const requestData = ( function() {
  const init = () => {
    const URI = 'http://localhost:3000/api/blogs';

    const fillInfoForAll = (data) => {
      blogArr.forEach((el) =>
        fillInformation(data.blogs, el[1], el[0]));
    };

    fetch(URI)
        .then((res) => res.json())
        .then((myJson) => {
          fillInfoForAll(JSON.parse(JSON.stringify(myJson)));
        })
        .catch((err) => console.error(err));
  };

  return {
    init,
  };
}());

export default requestData;
