import React from "react";

const CreateNote = () => {
    return (
        <>
            <div class="container">
                <div class="input-group mb-2 my-4">
                    <span class="input-group-text" id="inputGroup-sizing-default">TITTLE</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        </>
    )
}
export default CreateNote