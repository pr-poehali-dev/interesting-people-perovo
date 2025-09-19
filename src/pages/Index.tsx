import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stories = [
    {
      id: 1,
      name: "Анна Викторовна Петрова",
      title: "Учительница, которая изменила жизни",
      preview: "40 лет преподавания в школе №123. Её ученики стали врачами, инженерами, художниками...",
      age: "67 лет",
      profession: "Учитель математики",
      image: "/img/57d72d38-0531-4d7f-8ab3-9684648bf0de.jpg"
    },
    {
      id: 2,
      name: "Михаил Сергеевич Волков",
      title: "От слесаря до изобретателя",
      preview: "Создал уникальную систему очистки воды, которая работает в 15 домах района...",
      age: "52 года",
      profession: "Изобретатель",
      image: "/img/efdd9eb1-f6da-4ebc-a0f9-f70d008e64e8.jpg"
    },
    {
      id: 3,
      name: "Елена Дмитриевна Козлова",
      title: "Волонтёр с большим сердцем",
      preview: "Организовала помощь 200+ семьям во время пандемии. Создала сеть взаимопомощи...",
      age: "45 лет",
      profession: "Координатор волонтёров",
      image: "/img/416782f6-3096-4e7f-aa44-381bf929063b.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-montserrat md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-0 text-4xl">
              Интересные люди
            </h1>
            <h2 className="font-montserrat md:text-4xl font-semibold mb-8 text-foreground text-3xl">
              района Перово
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Удивительные истории обычных людей, которые делают наш район особенным. 
              Их опыт, мудрость и достижения вдохновляют соседей каждый день.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Читать истории
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
      </section>

      {/* Stories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Истории жизни
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Знакомьтесь с удивительными людьми, которые живут рядом с вами. 
              Каждая история — это целая вселенная опыта и мудрости.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card 
                key={story.id} 
                className="p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0 bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  {/* Profile image */}
                  <div className="w-20 h-20 mx-auto">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover rounded-full border-2 border-primary/20"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-montserrat text-xl font-bold text-foreground mb-1">
                      {story.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {story.age} • {story.profession}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-montserrat text-lg font-semibold text-primary">
                      {story.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {story.preview}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon name="ArrowRight" className="mr-2" size={16} />
                    Читать полную историю
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold mb-8 text-foreground">
              О проекте
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Район Перово — это не просто место на карте. Это дом для тысяч уникальных людей, 
              каждый из которых имеет свою историю. Наш проект создан, чтобы показать красоту 
              и многообразие жизней наших соседей.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-background/70 backdrop-blur-sm rounded-xl">
                <Icon name="Heart" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Вдохновение</h3>
                <p className="text-sm text-muted-foreground">
                  Истории, которые мотивируют и показывают, что каждый может изменить мир
                </p>
              </div>
              <div className="p-6 bg-background/70 backdrop-blur-sm rounded-xl">
                <Icon name="Users" className="mx-auto mb-4 text-secondary" size={32} />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Сообщество</h3>
                <p className="text-sm text-muted-foreground">
                  Укрепляем связи между соседями и создаём дружное сообщество
                </p>
              </div>
              <div className="p-6 bg-background/70 backdrop-blur-sm rounded-xl">
                <Icon name="BookOpen" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Память</h3>
                <p className="text-sm text-muted-foreground">
                  Сохраняем важные истории для будущих поколений жителей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="font-montserrat text-3xl font-bold mb-6 text-foreground">
              Поделитесь своей историей
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Знаете интересного человека в нашем районе? Хотите рассказать свою историю? 
              Мы всегда рады новым знакомствам!
            </p>
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Предложить историю
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;