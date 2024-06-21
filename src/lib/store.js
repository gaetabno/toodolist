import {
    writable
} from "svelte/store";

export const recordList = writable([{
    active: true,
    item: "Pippo",
    state: "todo"
}]);



export const addRecordToList = (value) => {
    const newRecord = {
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
            if (r.item === currentItem.item) r.state = state
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