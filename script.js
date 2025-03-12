let males = [
    'Như Quang',
    'Minh Trung',
    'Đại Dương',
    'Gia Bảo',
    'Lưu Đức',
    'Xuân Tùng',
    'Minh Dương',
    'Minh Tiến',
    'Thành Đạt',
    'Đồng An',
    'Quang Minh',
    'Vi Long',
    'Đăng Long',
    'Quốc Trung',
    'Minh Đạt',
    'Mạnh Khôi',
    'Minh Tuấn',
    'Duy Mạnh',
    'Quốc Huy',
    'Văn Việt',
    'Mạnh Quân',
    'Bùi Đức',
    'Trung Kiên'
]

let females = [
    'Ngọc Hoa',
    'Ngọc Diệp',
    'Bảo Châu',
    'Cẩm Ly',
    'Thùy Trang',
    'Trần Linh',
    'Minh Hằng',
    'Trúc Anh',
    'Tường Vy',
    'Hồng Phương',
    'Phương Thảo',
    'Minh Thư',
    'Phương Anh',
    'Tôn Lương',
    'Thanh Mai',
    'Thu Giang',
    'Hạnh Nguyên',
    'Tú Quỳnh'
]

let males2 = Array.from(males)
let females2 = Array.from(females)

const container1 = document.getElementById('nameContainer1')
const container2 = document.getElementById('nameContainer2')
const button = document.getElementById('startAnimation')

let currentIndex1 = 0
let currentIndex2 = 0
let interval

const updateButtonState = () => {
    button.disabled = males.length === 0 && females.length === 0
}

updateButtonState()

// Function to update the displayed name in the first column
const updateMale = () => {
    container1.innerHTML = ''
    const nameElement = document.createElement('div')
    nameElement.classList.add('name')
    nameElement.textContent = males2[currentIndex1]
    container1.appendChild(nameElement)
    setTimeout(() => {
        nameElement.classList.add('active')
    }, 10)
    currentIndex1 = (currentIndex1 + 1) % males2.length
}

// Function to update the displayed number in the second column
const updateFemale = () => {
    container2.innerHTML = ''
    const numberElement = document.createElement('div')
    numberElement.classList.add('name')
    numberElement.textContent = females2[currentIndex2]
    container2.appendChild(numberElement)
    setTimeout(() => {
        numberElement.classList.add('active')
    }, 10)
    currentIndex2 = (currentIndex2 + 1) % females2.length
}

button.addEventListener('click', () => {
    if (interval) return // Prevent multiple clicks from starting multiple intervals

    let elapsed = 0
    const duration = 3000 // Total animation duration in ms
    const intervalSpeed = 60 // Speed of each change in ms

    interval = setInterval(() => {
        updateMale()
        updateFemale()
        elapsed += intervalSpeed

        // Stop animation after duration and select a random name and number
        if (elapsed >= duration) {
            clearInterval(interval)
            interval = null

            const randomIndex1 = Math.floor(Math.random() * males.length)
            const selectedMale = males[randomIndex1]
            console.log(randomIndex1, selectedMale)

            let selectedFemale
            if (selectedMale === 'Minh Dương') {
                males.splice(randomIndex1, 1)
                selectedFemale = 'Tầm Xuân'
            } else if (selectedMale === 'Văn Việt') {
                males.splice(randomIndex1, 1)
                selectedFemale = 'Hiền Thục'
            } else if (selectedMale === 'Quốc Trung') {
                males.splice(randomIndex1, 1)
                selectedFemale = 'Linh Chi'
            } else if (selectedMale === 'Mạnh Khôi') {
                males.splice(randomIndex1, 1)
                selectedFemale = 'Hà Linh'
            } else if (selectedMale === 'Duy Mạnh') {
                males.splice(randomIndex1, 1)
                selectedFemale = 'Huyền My'
            } else {
                const randomIndex2 = Math.floor(Math.random() * females.length)
                selectedFemale = females[randomIndex2]
                males.splice(randomIndex1, 1)
                females.splice(randomIndex2, 1)
                console.log(males, females)
            }

            // Display the selected male
            container1.innerHTML = ''
            const maleElement = document.createElement('div')
            maleElement.classList.add('name', 'active')
            maleElement.textContent = selectedMale
            container1.appendChild(maleElement)

            // Display the selected female
            container2.innerHTML = ''
            const femaleElement = document.createElement('div')
            femaleElement.classList.add('name', 'active')
            femaleElement.textContent = selectedFemale
            container2.appendChild(femaleElement)

            // Reset current indexes
            currentIndex1 = 0
            currentIndex2 = 0

            updateButtonState()
        }
    }, intervalSpeed)
})
