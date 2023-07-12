export const createMockItem = (function(){
    let id = 0;
    return (
        name: string, 
        price:number, 
        quantity: number,
        image: string,
        date: Date,
        ) =>{
        return {
            id: `${id++}`,
            name,
            price,
            quantity,
            image,
            date: {
                seconds: date.getTime(),
                toString(){
                    return date.toString()
                }
            }
        }
    }
})();

export const createMockNotification = (function(){
    let id = 0;
    return (title: string, image: string, status: NotificationStatus, date: Date): Notification =>({
        id: `${id++}`,
        title,
        image,
        status,
        date: {
            seconds: date.getTime(),
            toString(){
                return date.toString()
            },
            toLocaleString(){
                return date.toLocaleString();
            }
        }
    })
})();