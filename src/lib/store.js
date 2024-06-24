import {
    writable
} from "svelte/store";

export const recordList = writable([]);



export const addRecordToList = (value,id) => {
    const newRecord = {
        id,
        item: value,
        state: "todo",
        active: true
    };

    recordList.update(list => {
        return [...list, newRecord]
    })

}

export const handleState = (currentItem, state) => {
    recordList.update(list => {
        list.map(r => {
            if (r.id === currentItem.id) r.state = state
        })
        return list
    });
}

export const searchRecords = (term, typeList) => {
    recordList.update(list => {
        list.map(r => {
            if (r.state === typeList) {
                r.item.includes(term) ? r.active = true : r.active = false
            }
        })
        return list;
    });
}