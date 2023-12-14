class Hotel {
    constructor(hotelName, visitorCount, roomCount) {
        this.hotelName = hotelName;
        this.visitorCount = visitorCount;
        this.roomCount = roomCount;
    }
}

class HotelCollection {
    constructor() {
        this.hotels = [];
    }

    addHotel(hotel) {
        this.hotels.push(hotel);
    }

    editHotel(index, updatedHotel) {
        if (index >= 0 && index < this.hotels.length) {
            this.hotels[index] = updatedHotel;
        }
    }

    deleteHotel(index) {
        if (index >= 0 && index < this.hotels.length) {
            this.hotels.splice(index, 1);
        }
    }

    getHotels() {
        return this.hotels;
    }
}

const hotelCollection = new HotelCollection();

function displayHotels(hotelsToDisplay) {
    const hotelList = document.getElementById("hotelList");
    hotelList.innerHTML = "";

    const hotels = hotelsToDisplay || hotelCollection.getHotels();

    hotels.forEach((hotel, index) => {
        const hotelDiv = document.createElement("div");
        hotelDiv.classList.add("hotel-info");
        hotelDiv.innerHTML = `
            <h3>Hotel Name: ${hotel.hotelName}</h3>
            <p>Number of Visitors in a Year: ${hotel.visitorCount}</p>
            <p>Number of Rooms: ${hotel.roomCount}</p>
            <hr>
            <button class="editButton" onclick="editHotel(${index})">Edit</button>
            <button class="deleteButton" onclick="deleteHotel(${index})">Delete</button>
        `;
        hotelDiv.dataset.index = index;
        hotelList.appendChild(hotelDiv);
    });
}

function calculateTotalPrice(hotels) {
    let totalPrice = 0;

    hotels.forEach((hotel) => {
        totalPrice += hotel.visitorCount * hotel.roomCount;
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function saveHotel() {
    const hotelName = document.getElementById("hotelName").value;
    const visitorCount = parseInt(document.getElementById("visitorCount").value);
    const roomCount = parseInt(document.getElementById("roomCount").value);

    if (hotelName && !isNaN(visitorCount) && visitorCount >= 0 && !isNaN(roomCount) && roomCount >= 0) {
        const newHotel = new Hotel(hotelName, visitorCount, roomCount);
        hotelCollection.addHotel(newHotel);
        clearForm();
        displayHotels();
        toggleCreateHotelSection();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
}

function clearForm() {
    document.getElementById("hotelName").value = "";
    document.getElementById("visitorCount").value = "";
    document.getElementById("roomCount").value = "";
    document.getElementById("save-hotel-button").textContent = "Save";
    document.getElementById("save-hotel-button").onclick = saveHotel;
}

function editHotel(index) {
    const hotel = hotelCollection.getHotels()[index];
    const hotelNameInput = document.getElementById("hotelName");
    const visitorCountInput = document.getElementById("visitorCount");
    const roomCountInput = document.getElementById("roomCount");

    hotelNameInput.value = hotel.hotelName;
    visitorCountInput.value = hotel.visitorCount;
    roomCountInput.value = hotel.roomCount;

    const saveButton = document.getElementById("save-hotel-button");
    saveButton.textContent = "Edit";
    saveButton.onclick = function () {
        saveEditedHotel(index);
    };

    toggleCreateHotelSection();
}

function saveEditedHotel(index) {
    const hotelName = document.getElementById("hotelName").value;
    const visitorCount = parseInt(document.getElementById("visitorCount").value);
    const roomCount = parseInt(document.getElementById("roomCount").value);

    if (hotelName && !isNaN(visitorCount) && visitorCount >= 0 && !isNaN(roomCount) && roomCount >= 0) {
        const updatedHotel = new Hotel(hotelName, visitorCount, roomCount);
        hotelCollection.editHotel(index, updatedHotel);
        clearForm();
        displayHotels();
        toggleCreateHotelSection();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
}

document.getElementById("showHotels").addEventListener("click", toggleCreateHotelSection);

document.getElementById("count_button").addEventListener("click", () => {
    calculateTotalPrice(hotelCollection.getHotels());
});

document.getElementById("resetTotalPrice").addEventListener("click", () => {
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = "Total Price: $0.00";
});

document.getElementById("calculateSearchedTotalPrice").addEventListener("click", () => {
    const findInput = document.getElementById("find_input").value.toLowerCase();
    const searchedHotels = hotelCollection.getHotels().filter((hotel) => {
        return hotel.hotelName.toLowerCase().includes(findInput);
    });
    calculateTotalPrice(searchedHotels);
});

document.getElementById("sort_button").addEventListener("click", () => {
    const sortedHotels = [...hotelCollection.getHotels()];
    sortedHotels.sort((a, b) => (b.visitorCount * b.roomCount) - (a.visitorCount * a.roomCount));
    displayHotels(sortedHotels);
});

document.getElementById("find_button").addEventListener("click", () => {
    findHotels();
});

document.getElementById("cancel_find_button").addEventListener("click", () => {
    cancelSearch();
});

function deleteHotel(index) {
    if (confirm("Are you sure you want to delete this hotel?")) {
        hotelCollection.deleteHotel(index);
        displayHotels();
    }
}

function findHotels() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    const searchResults = hotelCollection.getHotels().filter((hotel) => {
        return hotel.hotelName.toLowerCase().includes(findInput);
    });

    displayHotels(searchResults);
}

function cancelSearch() {
    document.getElementById("find_input").value = "";
    displayHotels();
}

function toggleCreateHotelSection() {
    const hotelAside = document.getElementById("hotelAside");
    const hotelList = document.getElementById("hotelList");

    if (hotelAside.classList.contains("hidden")) {
        hotelAside.classList.remove("hidden");
        hotelList.classList.add("hidden");
        clearForm();
    } else {
        hotelAside.classList.add("hidden");
        hotelList.classList.remove("hidden");
    }
}

function scrollToBottom() {
    window.scroll(0, document.body.scrollHeight);
}

function reloadPage() {
    location.reload();
}

displayHotels();