import {instance} from '../../c1-main/m3-dal/instance';

export const learnAPI = {
    sendGrade(grade: number, card_id: string) {
        instance.put('cards/grade', {grade, card_id})
    }
}

