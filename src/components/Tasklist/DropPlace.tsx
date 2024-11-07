import React from "react";


export const DropPlace = () => {
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        console.log(data);
    }
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }
    return (
        <div onDrop={handleDrop} onDragOver={handleDragOver} className="w-full h-full flex justify-center items-center">
            <p className="text-3xl font-bold text-primary">Drop Here</p>
            {/* <div className='px-2 mt-5 bg-white text-black min-h-[150px] rounded-lg hover:bg-gray-100 hover:border border-red-400'> </div> */}
        </div>
    );
}