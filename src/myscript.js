function changeText(container){
    if(!(container instanceof Element)){
        throw new Error('you must provide a container argument')
    }
    const element = container.querySelector(".myelement")
    element.textContent = "after modification"
}