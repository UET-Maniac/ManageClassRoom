export default function dayOfWeek(dayNumber) {
    switch(dayNumber) {
        case 2:
            return 'mon'
        case 3:
            return 'tue'
        case 4:
            return 'wed'
        case 5:
            return 'thu'
        case 6:
            return 'fri'
        case 7:
            return 'sat'
        case 8: 
            return 'sun'
        default:
            return ''
    }
}