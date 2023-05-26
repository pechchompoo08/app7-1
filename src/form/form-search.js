import React from 'react'

export default function FormSearch() {
    const textKW = React.useRef()
    const bntSearch = React.useRef()
    const onChangeKw = () => {
        if (textKW.current.value.trim() !== '') {
            bntSearch.current.disabled = false
        } else {
            bntSearch.current.disabled = true
        }
    }
    return (
        <form>
            <input type="text" name="kw" placeholder="ค้นหา" ref={textKW}
                onInput={onChangeKw} />
            <button ref={bntSearch} disabled >ค้นหา</button>
        </form>
    )
}