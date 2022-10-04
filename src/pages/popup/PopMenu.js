import React, { useEffect, useState } from 'react';

export default function PopMenu() {

    useEffect(() => {
        
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget)
                openModal(modal)
            })
        })

        // overlay.addEventListener('click', () => {
        //     const modals = document.querySelectorAll('.modal.active')
        //     modals.forEach(modal => {
        //         closeModal(modal)
        //     })
        // })

        // closeModalButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         const modal = button.closest('.modal')
        //         closeModal(modal)
        //     })
        // })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }

        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')
        return () => {

        };
    }, []);

    return (
        <div>
            <button data-modal-target="#modal">Open Modal</button>
            <div class="modal" id="modal">
                <div class="modal-header">
                    <div class="title">Example Modal</div>
                    <button data-close-button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
                </div>
            </div>
            <div id="overlay"></div>
        </div>
    );
}
