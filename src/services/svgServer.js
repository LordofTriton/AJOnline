const WebApp = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
            <path d="M26 2h4v4h-4z" fill={color}/><path d="M26 8h4v4h-4z" fill={color}/><path d="M20 2h4v4h-4z" fill={color}/>
            <path d="M20 8h4v4h-4z" fill={color}/>
            <path d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6zM18 28h-4v-4h4z" fill={color}/>
        </svg>
    )
}

const Web = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height}preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26m.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.65 15.65 0 0 0-1.38-3.56m7.91 12.81L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z" fill={color}/>
        </svg>
    )
}

const Brush = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
            <path d="M224.97 23.03c-21.304 0-45.232 11.742-71.118 34.902c-18.047 16.146-33.544 34.642-44.28 48.699A60 60 0 0 0 32 164c0 31.21-16.24 45.121-17.041 45.788A8 8 0 0 0 20 224h72a60 60 0 0 0 57.37-77.572c14.056-10.736 32.553-26.232 48.7-44.28c23.159-25.886 34.9-49.814 34.9-71.119a8 8 0 0 0-8-8zm-100.528 90.537a403.604 403.604 0 0 1 10.175-12.492a76.221 76.221 0 0 1 20.308 20.308a402.991 402.991 0 0 1-12.492 10.175a60.454 60.454 0 0 0-17.991-17.991zm42.549-2.867a92.199 92.199 0 0 0-21.69-21.69c19.61-21.185 45.983-44.374 70.798-49.109c-4.735 24.815-27.924 51.189-49.108 70.799z" fill={color}/>
        </svg>
    )
}

const Book = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
            <path d="M216 32v160a8 8 0 0 1-8 8H72a16.018 16.018 0 0 0-16 16h136a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8V56a32.037 32.037 0 0 1 32-32h136a8 8 0 0 1 8 8z" fill={color}/>
        </svg>
    )
}

const Menu = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill={color}/>
        </svg>
    )
}

const Twitter = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill={color}/>
        </svg>
    )
}

const FaceBook = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill={color}/>
        </svg>
    )
}

const Gmail = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4c0-2.4 1.9-4.4 4.3-4.4c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2H8z" fill={color}/>
        </svg>
    )
}

const LinkedIn = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill={color}/>
        </svg>
    )
}

const Github = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill={color}/>
        </svg>
    )
}

const Phone = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" fill={color}/>
        </svg>
    )
}

const Email = ({color, width, height}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11c0-.81-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9c-.81 0-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12c0 .81.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08c.3.31.65.47 1.04.47c.42 0 .77-.16 1.07-.47c.3-.31.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4c-2.19 0-4.07.77-5.65 2.35S4 9.81 4 12c0 2.19.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z" fill={color}/>
        </svg>
    )
}

const SVGServer = {
    Web,
    WebApp,
    Brush,
    Book,
    Menu,
    Twitter,
    FaceBook,
    Gmail,
    LinkedIn,
    Github,
    Phone,
    Email
}

export default SVGServer;