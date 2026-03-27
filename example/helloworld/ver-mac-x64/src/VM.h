#ifndef HW_VM_H
#define HW_VM_H

#include <QObject>

class VM: public QObject {
    Q_OBJECT

    Q_PROPERTY(QString mainGreetingText READ mainGreetingText WRITE setMainGreetingText NOTIFY didChangeMainGreetingText)
    Q_PROPERTY(bool mainIsVisible READ mainIsVisible WRITE setMainIsVisible NOTIFY didChangeMainIsVisible)

    public:
        VM();
        virtual ~VM() { }
      
        QString mainGreetingText() const;
        bool mainIsVisible() const;

    public slots:
        void setMainGreetingText(const QString &value);
        void setMainIsVisible(bool value);

    signals:
        void didChangeMainGreetingText(const QString &value);
        void didChangeMainIsVisible(bool value);

    private:
        QString _mainGreetingText;
        bool _mainIsVisible;
};

#endif // HW_VM_H
