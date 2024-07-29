import DefaultAvatar from '../assets/default-avatar.png'

export function Avatar() {
  return (
    <div className="w-8 h-8 rounded-full">
      <img alt="" src={DefaultAvatar} />
    </div>
  )
}
