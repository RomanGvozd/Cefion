import moment from 'moment'

export const diffDate = (endtime, starttime) => {
    let totalMinute = moment(endtime).diff(starttime) / (1000 * 60),
        years = Math.floor(totalMinute / 60 / 24 / 30 / 12),
        month = Math.floor(totalMinute / 60 / 24 / 30),
        days = Math.floor(totalMinute / 60 / 24),
        hours = Math.floor(totalMinute / 60),
        minute = totalMinute % 60,
        result = '';

    if(years > 0){
        result = result + years + ' years ';
    }

    if(month > 0 && month < 12 && years < 1){
        result = result + month + ' month ';
    }

    if(days > 0 && days < 24 && month < 1){
        result = result + days + ' days ';
    }

    if(hours > 0 && hours < 60 && days < 1){
        result = result + hours + ' hours ';
    }

    if(minute >= 0 && minute < 60 && hours < 1){
        result = result + minute + ' minuts ';
    }

    return result

}