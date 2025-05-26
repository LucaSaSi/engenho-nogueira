// 'use client';
// import Draggable from 'react-draggable';
// import { useRef } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DraggableBox() {
//     const nodeRef = useRef<HTMLElement>(null);
//     const router = useRouter();

//     return (
//         <Draggable nodeRef={nodeRef}>
//             <div
//                 ref={nodeRef}
//                 className="fixed top-10 left-10 z-[9999] md:w-30 sm:w-20 px-4 h-10 bg-gray-600 text-white flex items-center justify-center cursor-move shadow-lg rounded-full"
//             >
//                 <button
//                     onClick={() => router.back()}
//                     className="text-emerald-500 h-full w-full text-md focus:outline-none"
//                 >
//                     Voltar
//                 </button>
//             </div>
//         </Draggable>
//     );
// }
