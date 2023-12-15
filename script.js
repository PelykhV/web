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

let searchResults = [];

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

function calculateTotalRooms(hotels) {
    let totalRooms = 0;

    hotels.forEach((hotel) => {
        totalRooms += hotel.roomCount;
    });

    const totalRoomsElement = document.getElementById("totalRooms");
    totalRoomsElement.textContent = `Total Rooms: ${totalRooms}`;
}

function saveHotel() {
    const hotelName = document.getElementById("hotelName").value;
    const visitorCount = parseInt(document.getElementById("visitorCount").value);
    const roomCount = parseInt(document.getElementById("roomCount").value);

    if (hotelName && !isNaN(visitorCount) && visitorCount >= 0 && !isNaN(roomCount) && roomCount >= 0) {
        const newHotel = new Hotel(hotelName, visitorCount, roomCount);

        // Make a POST request to the backend API
        fetch('http://localhost:8080/api/hotels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                HotelName: newHotel.hotelName,
                VisitorsPerYear: newHotel.visitorCount,
                NumberOfRooms: newHotel.roomCount,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add hotel.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Hotel added successfully:', data);

            // Update the frontend collection with the new hotel
            const addedHotel = new Hotel(
                data.HotelName,
                data.VisitorsPerYear,
                data.NumberOfRooms
            );

            hotelCollection.addHotel(addedHotel);
            displayHotels(hotelCollection.getHotels());
        })
        .catch(error => {
            console.error('Error adding hotel:', error);
        });

        clearForm();
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
    const hotel = searchResults[index] || hotelCollection.getHotels()[index];
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
        if (searchResults.length > 0) {
            searchResults[index] = updatedHotel;
        } else {
            hotelCollection.editHotel(index, updatedHotel);
        }
        clearForm();
        if (searchResults.length > 0) {
            displayHotels(searchResults);
        } else {
            displayHotels();
        }
        toggleCreateHotelSection();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
}

document.getElementById("count_button").addEventListener("click", () => {
    calculateTotalRooms(searchResults.length > 0 ? searchResults : hotelCollection.getHotels());
});

document.getElementById("resetTotalRooms").addEventListener("click", () => {
    const totalRoomsElement = document.getElementById("totalRooms");
    totalRoomsElement.textContent = "Total Rooms: 0";
});

document.getElementById("calculateSearchedTotalRooms").addEventListener("click", () => {
    const findInput = document.getElementById("find_input").value.toLowerCase();
    searchResults = hotelCollection.getHotels().filter((hotel) => {
        return hotel.hotelName.toLowerCase().includes(findInput);
    });
    calculateTotalRooms(searchResults);
});

document.getElementById("sort_button").addEventListener("click", () => {
    let hotelsToSort = searchResults.length > 0 ? searchResults : hotelCollection.getHotels();
    const sortedHotels = [...hotelsToSort];

    if (sortedHotels.length > 0) {
        sortedHotels.sort((a, b) => b.roomCount - a.roomCount);
        displayHotels(sortedHotels);
    } else {
        displayHotels();
    }
});


document.getElementById("find_button").addEventListener("click", () => {
    findHotels();
});

document.getElementById("cancel_find_button").addEventListener("click", () => {
    cancelSearch();
});

async function deleteHotel(index) {
    if (confirm("Are you sure you want to delete this hotel?")) {
        if (searchResults.length > 0) {
            const deleted = await hotelCollection.deleteHotel(index);
            if (deleted) {
                displayHotels(searchResults);
            }
        } else {
            const deleted = await hotelCollection.deleteHotel(index);
            if (deleted) {
                displayHotels();
            }
        }
    }
}



function findHotels() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    searchResults = hotelCollection.getHotels().filter((hotel) => {
        return hotel.hotelName.toLowerCase().includes(findInput);
    });

    displayHotels(searchResults);
}

function cancelSearch() {
    document.getElementById("find_input").value = "";
    searchResults = [];
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

function fetchExistingHotels() {
    fetch('http://localhost:8080/api/hotels') // Update URL for your API
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch existing hotels.');
            }
            return response.json();
        })
        .then(data => {
            hotelCollection.hotels = [];
            data.forEach(hotelData => {
                const hotel = new Hotel(
                    hotelData.HotelName,
                    hotelData.VisitorsPerYear,
                    hotelData.NumberOfRooms
                );
                hotelCollection.addHotel(hotel);
            });
            displayHotels(hotelCollection.getHotels());
        })
        .catch(error => {
            console.error('Error fetching existing hotels:', error);
        });
}

document.addEventListener('DOMContentLoaded', fetchExistingHotels);

function addHotel(hotelData) {
    fetch('http://localhost:8080/api/hotels', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add hotel.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Hotel added successfully:', data);

        const addedHotel = new Hotel(
            data.hotelName,
            data.visitorsPerYear,
            data.numberOfRooms
        );

        this.hotels.push(addedHotel);
          displayHotels(this.hotel);
    })
    .catch(error => {
        console.error('Error adding hotel:', error);
    });
}

