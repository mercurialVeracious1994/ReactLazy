export const prefetchThirdPartyFiles = ({href,as,rel})=>{
    const linkTag = document.createElement('link');
    linkTag.href=href;
    linkTag.as= as;
    linkTag.rel=rel;
    document.head.appendChild(linkTag);
}
export const loadScript =({src})=>{
    return new Promise((res,rej)=>{
        const scriptTag = document.createElement('script');
        scriptTag.src=src;
        scriptTag.onload = res;
        scriptTag.error= rej;
        document.body.appendChild(scriptTag);
    })

}