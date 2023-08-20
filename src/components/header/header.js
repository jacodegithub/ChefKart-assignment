import './header.css'

export const Header = ({page, setPage}) => {
  return (
    <header className='max-width'>
        <div onClick={() => setPage("home")} className="header-arrow">
            <i className='bx bx-chevron-left cur-po'></i>
        </div>
       <div className="header-selection-title">
            {page === 'home' && 'Select Dishes'}
        </div> 
    </header>
  )
}
