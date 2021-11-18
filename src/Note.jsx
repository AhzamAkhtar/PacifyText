import React from "react";
const Note = () => {
    return (
        <>
        <div className="container">
        <div class="input-group mb-2 my-4">
                    <span class="input-group-text" id="inputGroup-sizing-default">TITTLE</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            <div class="card my-4">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                </div>
                <i class="far fa-trash-alt"></i>
            </div>
        </div>
        </>
    )
}
export default Note