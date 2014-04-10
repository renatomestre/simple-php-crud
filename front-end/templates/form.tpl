<form id="contactForm">
    <fieldset>
        <legend>New contact</legend>
        <input type="hidden" id="id" />
        <div>
            <label for="name">Complete name</label>
            <input type="text" id="name" class="txt" required />
        </div>
        <div>
            <label for="phone_number">Phone Number</label>
            <input type="number" id="phone_number" class="txt" required />
        </div>
        <div>
            <label for="reg_date">Registration date</label>
            <input type="date" id="reg_date" class="txt" required />
        </div>
    </fieldset>
    <div>
        <button class="button darkblue" id="btnSave">Save</button>
        <button class="button darkblue" id="btnNew">New</button>
    </div>
</form>