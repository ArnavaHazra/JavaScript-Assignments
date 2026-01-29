// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// ----------------------------------SOLUTION--------------------------------------------------

// for making HH:MM:SS format
const clockFormatter1 = (data) => {
    return data < 10 ? "0" + data : String(data);
}

//for formating 12Hr clocks
const clockFormatter2 = (HH) => {
    if(HH == 0)
        return clockFormatter1(12)
    else if(HH > 12)
        return clockFormatter1(HH % 12)
    else 
        return clockFormatter1(HH)
}

const clockFunc = () => {
    const currentDate = new Date();

    const hours     =   currentDate.getHours();
    const minutes   =   currentDate.getMinutes();
    const seconds   =   currentDate.getSeconds();

    const timeFormat24 = `${clockFormatter1(hours)}:${clockFormatter1(minutes)}:${clockFormatter1(seconds)}`

    const timeFormat12 = `${clockFormatter2(hours)}:${clockFormatter1(minutes)}:${clockFormatter1(seconds)}`

    const AM_PM = hours < 12 ? "AM" : "PM"

    console.clear();
    console.log("DIGITAL CLOCK")
    console.log("24Hr format: " + timeFormat24);
    console.log("12Hr format: " + timeFormat12 + " " + AM_PM);
    setTimeout(clockFunc, 1000)
}

clockFunc()
