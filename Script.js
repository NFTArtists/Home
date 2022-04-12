$(".myItems").html($(".myItems .item").sort(Function() {
                                            return Math.random() - 0.5;
                   }));
