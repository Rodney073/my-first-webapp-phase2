/*$('.photoframe').append('<img id="bigpic" src="https://i.imgur.com/GNNcXpQ.jpg" alt="">');
$('.textbox').append('<h1>So Cute!</h1>');
$('.textbox').append('<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>');

let data = {
    photo: 'images/photo1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };*/

//$('#photo').attr('src', data.photo);


let pic1 = {
    photo: 'https://static.boredpanda.com/blog/wp-content/uploads/2019/04/travelling-cuddling-stray-cats-istanbul-orin-fb12.png',
    title: 'Cute1',
    text: 'Neque porro quisquam est1'
};

let pic2 = {
    photo: 'https://m.blog.hu/ci/citydogs/image/kutya-macska_baratsag_10.jpg',
    title: 'Cute2',
    text: 'Neque porro quisquam est2'
};

let pic3 = {
    photo: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/15/41/1444244374-gettyimages-559292053.jpg',
    title: 'Cute3',
    text: 'Neque porro quisquam est3'
};

let pic4 = {
    photo: 'https://i.ytimg.com/vi/4V7uTRwnaaw/maxresdefault.jpg',
    title: 'Cute4',
    text: 'Neque porro quisquam est4'
};

let pic5 = {
    photo: 'https://i.imgur.com/GNNcXpQ.jpg',
    title: 'Cute5',
    text: 'Neque porro quisquam est5'
};

let pic6 = {
    photo: 'https://www.petspyjamas.com/uploads/2013/07/can-cats-and-dogs-be-friends-1.jpg',
    title: 'Cute6',
    text: 'Neque porro quisquam est6'
};



let currentPhoto = 0;
let imagesData = [pic1, pic2, pic3, pic4, pic5, pic6];


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-description').append('<h1>' + imagesData[photoNumber].title + '</h1>');
    $('#photo-description').append('<p>' + imagesData[photoNumber].text + '</p>');
}

loadPhoto(currentPhoto);

$('.right_arrow_frame').click(() => {
    $('h1').text('');
    $('p').text('');
    if (currentPhoto < 5) {
        currentPhoto++;
    }
    else { currentPhoto = 0 }
    loadPhoto(currentPhoto);
})


$('.left_arrow_frame').click(() => {
    $('h1').text('');
    $('p').text('');
    if (currentPhoto > 0) {
        currentPhoto--;
    } else { currentPhoto = 5 }
    loadPhoto(currentPhoto);
})


imagesData.forEach((numofpic) => {
    $('.tinypics').append('<img id="thumbnails" src="' + numofpic.photo + '">');
})



