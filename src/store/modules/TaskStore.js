export default {
    state: {
        taskData: [
            {   
                id: 0,
                title: 'Задания',
                tasks: [
                    {
                        id: 0,
                        discription: 'Выучить Vue',
                    },
                    {
                        id: 1,
                        discription: 'Выбросить мусор',
                    }
                ]
            },
            {   
                id: 1,
                title: 'В процессе',
                tasks: [
                    {
                        id: 0,
                        discription: 'Сварить кофе',
                    }
                ]
            }
        ]
    },
    mutations: {
        updateColumn(state, options){
            state.taskData.push({title: options.title, tasks: options.tasks})
        }
    },
    actions: {
        addColumn(ctx, options){
            ctx.commit(
                'updateColumn', options
            )
        }
    },
    getters: {
        getTasks(state){
            return state.taskData
        }
    }
}