import React from 'react'

export default function HrefChevron({ to , className , children , chevronH }) {
    return (
        <a href={to} target="_blank" rel="noreferrer" className={`group text-sky-50 ${className}`}>
            { children }
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={`${chevronH} inline fill-sky-50 pb-1 pl-2 group-hover:ml-1 duration-200`}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </span>
        </a>
    )
}