// export const VideoTitle = ({ text, bgcolor }) => {
//   return (
//     <li
//       className={`${
//         bgcolor ? bgcolor : "bg-gray-200"
//       } p-2 text tracking-wide`}
//     >
//       {text}
//     </li>
//   );
// };

// export const BlockHeader = ({text, className}) => {
//     return <div className={`bg-blue-400 text-white px-4 py-2 ${className ? className : "font-black text-2xl "}`}>
//         {text}
//     </div>
// }

// export const EntryItem = ({
//   image,
//   title,
//   author,
//   date,
//   isSubscribed,
//   senderGroup,
//   highlightText,
// }) => {
//   return (
//     <div className="flex gap-4 items-center">
//       <img src={image} className="h-24" />
//       <div className="flex flex-col gap-2">
//         {highlightText && <div className="text-blue-400 tracking-wide text-lg">[{highlightText}]</div>}
//         <div className="font-bold text-lg tracking-wide">{title}</div>
//         <div className="flex gap-4">
//           <div>by <span className="text-blue-400">{author}</span></div>
//           <div>{date}</div>
//           <div>{isSubscribed}</div>
//         </div>
//         <div>From Topicbox: {senderGroup}</div>
//       </div>
//     </div>
//   );
// };
