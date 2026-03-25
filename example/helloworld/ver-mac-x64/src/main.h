#ifndef HW_MAIN_H
#define HW_MAIN_H

#include "KT.h"
#include "VM.h"

//<!-- Component -->

class MainComponent {
    public:
        MainComponent(/*const VM &vm*/);

        void launch();

    private:
        EffectRegistry *_er;
};

#endif // HW_MAIN_H
