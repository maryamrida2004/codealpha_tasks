const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/024/903/855/small_2x/vibrant-autumn-maple-leaves-falling-outdoors-in-november-generated-by-ai-free-photo.jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/calm-lake-surface-in-fall-free-image.jpeg?w=600&quality=80",
    "https://static.vecteezy.com/system/resources/previews/048/995/990/non_2x/autumn-reflections-over-calm-lake-with-colorful-trees-in-misty-mountains-free-photo.jpeg",
    "https://t3.ftcdn.net/jpg/08/45/89/26/360_F_845892641_2m17p2d4pXXPTQ8biFum77hQrXrA9jOx.jpg",
    "https://media.istockphoto.com/id/514325748/photo/bosphorus-bridge-during-the-sunset-istanbul.jpg?s=612x612&w=0&k=20&c=yas55PBl8t8HZKbXam2gis6UTiU9R8Wm5PwIXf0EKH0=",
    "https://studyinturkey.com/wp-content/uploads/2021/05/istanbul1.jpg"
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = images[currentIndex];
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
};





