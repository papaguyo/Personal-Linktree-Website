

const SwDev = () => {
    let swUrl = '/sw.js'
    if('serviceWorker' in navigator){
        window.addEventListener('load', () =>{
            navigator.serviceWorker.register(swUrl)
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
}


export default SwDev